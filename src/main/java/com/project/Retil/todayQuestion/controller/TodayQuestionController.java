package com.project.Retil.todayQuestion.controller;

import com.project.Retil.todayQuestion.service.TodayQuestionImpl;
import com.project.Retil.todayQuestion.entity.TodayQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/today-questions")
public class TodayQuestionController {

    @Autowired
    private TodayQuestionImpl todayQuestionImpl;

    // 오늘의 문제를 생성하는 엔드포인트
    @PostMapping("/generate")
    public List<TodayQuestion> generateTodayQuestions() {
        return todayQuestionImpl.generateTodayQuestions();
    }

    // 오늘의 문제를 조회하는 엔드포인트
    @GetMapping
    public List<TodayQuestion> getTodayQuestions() {
        return todayQuestionImpl.getTodayQuestions();
    }
}
