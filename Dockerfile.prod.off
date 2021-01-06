FROM ishnoor/dcs-ver1
# Remove the default nginx index.html
RUN rm -rf /var/www/
# Copy the contents of the d
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
# Start server
CMD ["nginx", "-g", "daemon off;"]