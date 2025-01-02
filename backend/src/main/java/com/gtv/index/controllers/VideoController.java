package com.gtv.index.controllers;

import com.gtv.index.service.VideoService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RestController
public class VideoController {

    public static final String UPLOAD_VIDEO_PATH = "/api/v";

    VideoService videoService;
    VideoDao videoDao;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(UPLOAD_VIDEO_PATH)
    public void uploadVideo(@RequestParam(value = "file") MultipartFile file) {
        var url = videoService.uploadVideo(file);
        videoDao.save(VideoEntity.builder().url(url).build());
    }
}
