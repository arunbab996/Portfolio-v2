import { useEffect, useState } from 'react';
import './Bookshelf.css';

export default function Bookshelf() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1IY-ictcATAZNfcJajwkKCJlT7-b7SBwPl_q2RZ4ntCc/export?format=csv&gid=861814196';
    const CACHE_KEY = 'arun_books_v1.1';

    const parseCSV = (csvData) => {
      const rows = csvData.split(/\r?\n/);
      const cleanRows = rows.filter(r => r.trim().length > 0);
      
      const parsedBooks = [];
      cleanRows.slice(1).forEach((row) => {
        const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/; 
        const cols = row.split(regex).map(c => c.replace(/^"|"$/g, '').trim());

        const title = cols[0]; 
        const author = cols[1];
        const cover = cols[2];
        const isReading = cols[3] && cols[3].toLowerCase() === 'yes';
        const category = cols[4] ? cols[4].trim() : ''; 

        if (title) {
          parsedBooks.push({ title, author, cover, isReading, category });
        }
      });
      
      setBooks(parsedBooks);
      setLoading(false);
    };

    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) parseCSV(cachedData);

    fetch(SHEET_URL)
      .then(res => res.text())
      .then(csv => {
        if (csv !== cachedData) {
          localStorage.setItem(CACHE_KEY, csv);
          parseCSV(csv);
        }
      })
      .catch(err => {
        if (!cachedData) { setError(true); setLoading(false); }
      });
  }, []);

  const categories = ['All', ...new Set(books.map(b => b.category).filter(Boolean))];
  const filteredBooks = activeFilter === 'All' ? books : books.filter(b => b.category === activeFilter);

  return (
    <div className="bookshelf-wrapper">
      
      {categories.length > 1 && !loading && (
        <div className="books-filter-row">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`books-filter-pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="books-grid">
        {loading && <div className="books-loading">Loading library…</div>}
        {error && !loading && <div className="books-loading">Failed to load library.</div>}

        {!loading && filteredBooks.map((book, index) => (
          <div 
            className="book-card" 
            key={index + book.title}
            style={{ animationDelay: `${index * 0.05}s` }} 
          >
            <div className="book-cover">
              {book.isReading && <div className="reading-badge">Reading</div>}
              <div className="book-cover-img-wrapper">
                <img 
                  src={book.cover || ''} 
                  alt={book.title} 
                  loading="lazy"
                  style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
                  onLoad={(e) => e.target.style.opacity = 1}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/100x155/e7e8eb/a3a3a3?text=No+Cover'; 
                    e.target.style.opacity = 1;
                  }}
                />
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author || ''}</div>
          </div>
        ))}
      </div>
    </div>
  );
}