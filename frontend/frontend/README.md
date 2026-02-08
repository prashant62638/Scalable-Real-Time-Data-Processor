🚀 Scalable Real-Time Data Processor

Technical Assessment – AR Genix AI Solutions Pvt Ltd

📌 Overview

This project is a full-stack real-time data processing system built to demonstrate performance-focused frontend rendering, secure backend design, and scalable data persistence.

The application simulates a high-frequency data stream, efficiently renders 5,000+ live records, secures APIs using custom middleware, and stores incoming data in a database with an optimized schema.

🎯 Assessment Coverage
Real-time data monitoring
Virtualized rendering for 5,000+ records
Efficient React state management
Custom rate limiter (from scratch)
Custom request validation middleware
Database persistence with optimized schema
Production-grade architecture & error handling

🖥️ Frontend (React.js)

Features

Real-time data stream (1 record/second)
Virtualized list for smooth performance
Minimal re-renders using hooks & memoization
Graceful handling of backend failures

Why Virtualization?
Only visible rows are rendered, keeping UI performance constant even with thousands of records.

🔁 Backend (Node.js + Express)

Asynchronous API for data ingestion
Custom rate limiter using in-memory Map
Request validation middleware
Secure and controlled data processing
Rate Limiting
Per-IP request tracking

Returns HTTP 429 when exceeded
(No third-party libraries used)

⚠️ Error Handling

Backend unreachable → UI warning
Rate limit exceeded → user-visible message
Invalid payload → rejected immediately
UI remains responsive under load

📂 Project Structure
backend/
frontend/
README.md
