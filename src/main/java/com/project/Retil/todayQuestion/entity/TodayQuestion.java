package com.project.Retil.todayQuestion.entity;

import com.project.Retil.question.entity.Question;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TodayQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 엔티티의 고유 ID

    @ManyToOne
    @JoinColumn(nullable = false, name = "question_id")
    private Question question; // 연결된 Question 엔티티

    @Column(nullable = false)
    private LocalDate date; // 문제 생성 날짜

    public TodayQuestion(Question question, LocalDate date) {
        this.question = question;
        this.date = date;
    }
}
