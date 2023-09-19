package com.example.demo.response;


public class Response {
    private String message;
    private int status;
    private Object data;

    public Response(String message, int status, Object data) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public int setStatus(int status) {
        this.status = status;
        return status;
    }

    public String getMessage() {
        return message;
    }

    public String setMessage(String message) {
        this.message = message;
        return message;
    }

    public Object getData() {
        return data;
    }

    public Object setData(Object data) {
        this.data = data;
        return data;
    }

}
