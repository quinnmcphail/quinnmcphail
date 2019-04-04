FROM busybox:latest
LABEL maintainer="quinnmcphail@me.com"

COPY ./bin/output /output

CMD ["cat", "/output"]