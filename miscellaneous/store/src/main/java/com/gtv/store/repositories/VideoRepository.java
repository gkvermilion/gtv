package com.gtv.store.repositories;

import com.gtv.store.entities.VideoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<VideoEntity, Long> {

}
