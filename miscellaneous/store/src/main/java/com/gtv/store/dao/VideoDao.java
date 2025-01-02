package com.gtv.store.dao;

import com.gtv.store.entities.VideoEntity;
import com.gtv.store.repositories.VideoRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Component
public class VideoDao {

    VideoRepository videoRepository;

    @Transactional
    public VideoEntity save(VideoEntity video) {
        return videoRepository.save(video);
    }
}
