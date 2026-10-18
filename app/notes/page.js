'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialNotes = [
  'Plan the sprint tasks for the next release.',
  'Review the onboarding checklist for new teammates.',
  'Send a reminder about the design handoff meeting.',
];

export default function NotesPage() {
  const router = useRouter();
  const [notes, setNotes] = useState(initialNotes);
  const [draft, setDraft] = useState('');

  const handleAddNote = (event) => {
    event.preventDefault();

    const trimmedDraft = draft.trim();
    if (!trimmedDraft) return;

    setNotes((prev) => [trimmedDraft, ...prev]);
    setDraft('');
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <main className="page-shell">
      <section className="notes-card">
        <div className="notes-header">
          <h1>Notes</h1>
          <button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

        <form className="notes-form" onSubmit={handleAddNote}>
          <textarea
            className="input textarea"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a new note..."
          />
          <button type="submit" className="primary-btn">Add Note</button>
        </form>

        <div className="notes-list">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <article className="note-item" key={`${note}-${index}`}>
                <p>{note}</p>
              </article>
            ))
          ) : (
            <div className="empty-state">No notes yet.</div>
          )}
        </div>
      </section>
    </main>
  );
}
