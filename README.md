# Facts-h

This repository contains the source code for Facts-h project.

## Normal Run

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/raunakkumarsingh/Facts-h.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Facts-h
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

## Docker Run

To run the project using Docker, follow these steps:

1. Build the Docker image:
    ```bash
    docker build -t [name:tag] .
    ```

2. Run the Docker container:
    ```bash
    docker run -d -it --rm -p [host_port]:[container_port] --name [container_name] [image_id/image_tag]
    ```

Example:
```bash
docker build -t factsh:0.1 .
docker run -d -it --rm -p 8080:80 --name factsh-container e73cxxxxxx
