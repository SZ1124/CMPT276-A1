package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.models.Student;
import com.example.demo.models.StudentRepository;

import jakarta.servlet.http.HttpServletResponse;

@Controller
public class StudentController {  
    
    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/student/view")
    public String getAllStudent(Model model)
    {
        System.out.println("Getting all students");

        List<Student> student=studentRepo.findAll();

        model.addAttribute("us", student);

        return "Student/showAll";
    }

    @PostMapping("/student/add")
    public String addStudent(Model model, @RequestParam Map<String, String> newstudent, HttpServletResponse response)
    {
        System.out.println("ADD student");
        String newName=newstudent.get("name");
        int newWeight=Integer.parseInt(newstudent.get("weight"));
        int newHeight=Integer.parseInt(newstudent.get("height"));
        String newHaircolor=newstudent.get("haircolor");
        double newGpa=Double.parseDouble(newstudent.get("gpa"));
        int newFriends=Integer.parseInt(newstudent.get("friends"));

        studentRepo.save(new Student(newName, newWeight, newHeight, newHaircolor, newGpa, newFriends));

        List<Student> student=studentRepo.findAll();
        model.addAttribute("us", student);

        return "Student/showAll";
    }

    @GetMapping("/student/view/delete/{sid}")
    public String deleteStudent(Model model, @PathVariable String sid)
    {
        int id=Integer.parseInt(sid);
        Student stu=studentRepo.findBySid(id).get(0);
        
        studentRepo.delete(stu);

        List<Student> student=studentRepo.findAll();
        model.addAttribute("us", student);

        return "Student/showAll";
    }

    @GetMapping("/student/view/edit/{sid}")
    public String editStudent(Model model, @RequestParam Map<String, String> newstudent, @PathVariable String sid)
    {
        int id=Integer.parseInt(sid);
        Student stu=studentRepo.findBySid(id).get(0);

        String newName=newstudent.get("editName");
        stu.setName(newName);
        int newWeight=Integer.parseInt(newstudent.get("editWeight"));
        stu.setWeight(newWeight);
        int newHeight=Integer.parseInt(newstudent.get("editHeight"));
        stu.setHeight(newHeight);
        String newHaircolor=newstudent.get("editHaircolor");
        stu.setHaircolor(newHaircolor);
        double newGpa=Double.parseDouble(newstudent.get("editGpa"));
        stu.setGpa(newGpa);
        int newFriends=Integer.parseInt(newstudent.get("editFriends"));
        stu.setFriends(newFriends);

        studentRepo.save(stu);
        List<Student> student=studentRepo.findAll();
        model.addAttribute("us", student);

        return "Student/showAll";
    }

    @GetMapping("/student/display")
    public String displayStudent(Model model)
    {
        List<Student> student=studentRepo.findAll();

        model.addAttribute("us", student);

        return "Student/display";
    }
}