```
# Image Compressor Server

Image Compressor Server is a web server for compressing images using the imgecompress package.

## Installation

To install Image Compressor Server, you can use npm:

```
npm install image-compressor-server
```

## Usage

To start the server, run the following command:

```
npm start
```

The server will be running at http://localhost:3000 by default.

## API Endpoint

### POST /upload

This endpoint accepts multipart form-data with images to be compressed. The compressed images will be stored in the 'compressed_images' directory.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
```
