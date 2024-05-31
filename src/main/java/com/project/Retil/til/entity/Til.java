package com.project.Retil.til.entity;

import com.project.Retil.userAccount.Entity.User_Information;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Til {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 에디터 번호(자동 생성)


    @ManyToOne
    @JoinColumn(nullable = false, name = "subject_id")
    private TilSubject tilSubject;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 10000)
    private String content;

    @ManyToOne
    @JoinColumn(nullable = false, name = "user_id")
    private User_Information user;

    @Column
    private LocalDateTime saveTime;

    @Column
    private Boolean bookmark;

    public Til(TilSubject tilSubject, String title, String content, User_Information user, Boolean check) {
        this.tilSubject = tilSubject;
        this.title = title;
        this.content = content;
        this.user = user;
        this.saveTime = LocalDateTime.now();
        this.bookmark = check;
    }
}
