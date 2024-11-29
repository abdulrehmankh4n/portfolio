# Use an nginx base image to serve the static files
FROM nginx:alpine

# Copy static files to the nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
