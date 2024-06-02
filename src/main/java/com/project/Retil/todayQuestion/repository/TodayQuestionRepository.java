package com.project.Retil.todayQuestion.repository;

import com.project.Retil.todayQuestion.entity.TodayQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TodayQuestionRepository extends JpaRepository<TodayQuestion, Long> {

    // 특정 날짜에 생성된 오늘의 문제 리스트를 조회하는 메서드
    List<TodayQuestion> findByDate(LocalDate date);
}
