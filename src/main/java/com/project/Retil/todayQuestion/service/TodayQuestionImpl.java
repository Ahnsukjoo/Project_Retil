package com.project.Retil.todayQuestion.service;

import com.project.Retil.question.entity.Question;
import com.project.Retil.question.repository.QuestionRepository;
import com.project.Retil.todayQuestion.entity.TodayQuestion;
import com.project.Retil.todayQuestion.repository.TodayQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class TodayQuestionImpl {

    @Autowired
    private TodayQuestionRepository todayQuestionRepository;

    @Autowired
    private QuestionRepository questionRepository;

    // 오늘의 문제를 생성하는 메서드
    @Transactional
    public List<TodayQuestion> generateTodayQuestions() {
        LocalDate today = LocalDate.now(); // 오늘 날짜를 가져옴
        List<Question> allQuestions = questionRepository.findAll(); // 모든 문제를 조회
        // TIL_NUM에 따라 문제를 그룹화
        Map<Long, List<Question>> questionsByTilNum = allQuestions.stream()
            .collect(Collectors.groupingBy(q -> q.getTil().getId()));

        List<Question> selectedQuestions = new ArrayList<>();
        int totalQuestions = Math.min(20, allQuestions.size()); // 최대 20개의 문제만 선택

        // 비율에 따라 문제를 랜덤으로 선택
        while (selectedQuestions.size() < totalQuestions) {
            for (List<Question> tilQuestions : questionsByTilNum.values()) {
                if (selectedQuestions.size() < totalQuestions && !tilQuestions.isEmpty()) {
                    Collections.shuffle(tilQuestions);
                    selectedQuestions.add(tilQuestions.remove(0));
                }
            }
        }

        // 오늘의 문제 엔티티로 변환
        List<TodayQuestion> todayQuestions = selectedQuestions.stream()
            .map(q -> new TodayQuestion(q, today))
            .collect(Collectors.toList());

        // 데이터베이스에 저장
        return todayQuestionRepository.saveAll(todayQuestions);
    }

    // 오늘의 문제를 조회하는 메서드
    public List<TodayQuestion> getTodayQuestions() {
        return todayQuestionRepository.findByDate(LocalDate.now());
    }
}
