import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header() {
  const unsplashcri =
    'https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80%20465w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80%20765w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80%20930w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80%201065w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80%201365w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80%201530w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80%201665w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80%201965w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80%202130w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2265&q=80%202265w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2565&q=80%202565w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80%202730w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80%202865w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80%203165w,%20https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3237&q=80%203237w';
  return (
    <Container className='d-flex justify-content-center'>
      <div style={{ marginBottom: '20px', gap: '3' }}>
        <strong>Afghans Tampere Cricket(ATC)</strong>
      </div>
      {/* <img alt='cricket_unslpach' src={unsplashcri} width={50} height={50} /> */}
    </Container>
  );
}