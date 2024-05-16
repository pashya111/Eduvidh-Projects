package com.example.blogApi.Controller;

import com.example.blogApi.Model.Blog;
import com.example.blogApi.Service.BlogService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping
    public ResponseEntity<List<Blog>> getAllBlogPosts() {
        List<Blog> blogPosts = blogService.getAllBlogPosts();
        return ResponseEntity.ok(blogPosts);
    }

    @PostMapping
    public ResponseEntity<Blog> addBlogPost(@Valid @RequestBody Blog blog) {
        Blog savedBlogPost = blogService.addBlogPost(blog);
        return new ResponseEntity<>(savedBlogPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlogPost(@PathVariable Long id, @Valid @RequestBody Blog blog) {
        Blog updatedBlogPost = blogService.updateBlogPost(id, blog);
        return new ResponseEntity<>(updatedBlogPost, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable Long id) {
        blogService.deleteBlogPost(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<Blog> findByTitle(@PathVariable String title) {
        Blog blogPost = blogService.findByTitle(title);
        if(blogPost != null) {
            return ResponseEntity.ok(blogPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
