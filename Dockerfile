FROM nginx:alpine

# Remove default nginx config and page
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy site files
COPY index.html about.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/
COPY Agents/ /usr/share/nginx/html/Agents/
COPY docs/ /usr/share/nginx/html/docs/

EXPOSE 80
