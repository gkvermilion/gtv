package com.gtv.store;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("com.gtv.store.dao")
@EnableJpaRepositories("com.gtv.store.repositories")
@EntityScan("com.gtv.store.entities")

public class EnableStore {

}
