package com.example.blogApi.Service;

import com.example.blogApi.Model.Blog;
import com.example.blogApi.Repository.BlogRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BlogServiceImpl implements BlogService{

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog addBlogPost(@Valid Blog blogPost) {
        blogPost.setPostedDate(new Date());
        return blogRepository.save(blogPost);
    }

    @Override
    public Blog updateBlogPost(Long id, @Valid Blog updatedBlogPost) {
        Blog blogPost = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Blog post not found with id: " + id));
        blogPost.setTitle(updatedBlogPost.getTitle());
        blogPost.setHeading(updatedBlogPost.getHeading());
        blogPost.setDescription(updatedBlogPost.getDescription());
        blogPost.setAuthor(updatedBlogPost.getAuthor());
        return blogRepository.save(blogPost);
    }

    @Override
    public void deleteBlogPost(Long id) {
        Blog blogPost = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Blog post not found with id: " + id));
        blogRepository.delete(blogPost);
    }

    @Override
    public Blog findByTitle(String title) {
        return blogRepository.findByTitle(title);
    }
    @Override
    public List<Blog> getAllBlogPosts() {
        return blogRepository.findAll();
    }
}
