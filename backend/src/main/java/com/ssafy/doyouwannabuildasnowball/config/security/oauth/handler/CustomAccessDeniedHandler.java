package com.ssafy.doyouwannabuildasnowball.config.security.oauth.handler;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.doyouwannabuildasnowball.common.dto.ExceptionResponse;
import jdk.internal.org.jline.utils.Log;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomAccessDeniedHandler implements AccessDeniedHandler {


    private final ObjectMapper objectMapper;

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        Log.info("[CustomAccessDeniedHandler] handler");
        String body = objectMapper.writeValueAsString(ExceptionResponse.from("보유한 권한으로 접근할 수 없습니다."));

        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        response.getWriter().write(body);
        response.setStatus(HttpStatus.FORBIDDEN.value());

    }
}
