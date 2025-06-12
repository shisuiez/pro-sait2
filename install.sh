#!/bin/bash

# Install dependencies
npm install

# Create necessary directories
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/styles
mkdir -p src/types

# Start development server
npm run dev 