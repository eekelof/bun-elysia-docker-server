FROM oven/bun:latest
WORKDIR /app
ENV SECRET=secret
COPY dist/ ./dist/
EXPOSE 3000
CMD ["bun", "dist/index.js"]