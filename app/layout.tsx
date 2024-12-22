import React from 'react';
import './globals.css'; // If you want to add global styles
import { Inter } from 'next/font/google';

// Import the TicTacToe component
import TicTacToe from './page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tic-Tac-Toe Game',
  description: 'Play a simple game of Tic-Tac-Toe!',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className} style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
          <h1>Tic-Tac-Toe Game</h1>
        </header>
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          {children || <TicTacToe />} {/* If no child component, show the TicTacToe game */}
        </main>
        <footer
          style={{
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#282c34',
            color: 'white',
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        >
          <p>&copy; 2024 Tic-Tac-Toe Game. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
