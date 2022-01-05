FROM python:3.10.0-slim-buster
ENV PYTHONUNBUFFRED=1
WORKDIR /app
COPY requirement.txt requirement.txt
RUN pip3 install -r  requirement.txt
COPY . .