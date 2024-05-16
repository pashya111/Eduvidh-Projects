package com.example.blogApi.Service;

import com.example.blogApi.Model.Blog;
import jakarta.validation.Valid;

import java.util.List;

public interface BlogService {
    Blog addBlogPost(@Valid Blog blogPost);
    Blog updateBlogPost(Long id, @Valid Blog blogPost);
    void deleteBlogPost(Long id);
    Blog findByTitle(String title);
    List<Blog> getAllBlogPosts();
}
