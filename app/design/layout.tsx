import React from 'react';
import styles from './design.module.css';

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Adarsh.Design</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
