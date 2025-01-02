package com.gtv.store.entities;

import com.gtv.store.enums.VideoStatusEnum;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PROTECTED)
@Entity
@Table(name = "video")
public class VideoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;

    String title;

    String description;

    String userId;

    Integer likes;

    Integer dislikes;

    @OneToMany
    Set<TagEntity> tags;

    String url;

    VideoStatusEnum status;

    Integer views;

    String thumbnail;

    @OneToMany
    List<CommentEntity> comments;

    @Builder.Default
    @Column(nullable = false, updatable = false)
    Instant createdAt = Instant.now();

    Boolean isProcessed;

    Instant processedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VideoEntity that = (VideoEntity) o;
        return Objects.equals(id, that.id) && status == that.status;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, status);
    }
}
