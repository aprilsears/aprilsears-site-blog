<template>
    <div class="about-content"></div>
    <h1>About Me</h1>
    <h2>Hi, I'm April Sears</h2>
    <p>I'm a developer passionate about building things and sharing what I learn. Follow my journey as I tackle new projects and technologies.</p>
    <p>Hi, I’m April — a dedicated mother, curious problem solver, and the kind of person who sees a challenge and thinks, “Alright, let’s figure this out.”
    I’m a proud mom to two incredible girls, Aubrey and Dylan. They’re my greatest motivation and constant reminders of why I work hard, push boundaries, and always strive to show up with both grit and grace. Whether I’m helping with school projects or juggling dinner and deadlines, I bring the same thoughtful care and determination to every part of life.
    By trade, I’m a Website Developer and Administrative Specialist — but at heart, I’m a fixer. If something’s broken, messy, or inefficient, I have to make it better. Whether it’s streamlining workflows, cleaning up code, or organizing chaos (digital or real-world), I love getting things in order and making them work.
    What sets me apart? I bring a human touch to everything I do. I understand people just as well as I understand processes. My background in both tech and administration gives me a unique edge: I know how to build solutions that make sense — not just technically, but practically.
    When I’m not deep in development or organizing the world around me, you’ll find me reading up on human behavior, thinking about what motivates people, and how we can all communicate a little better.
    In short: I work hard, love harder, and solve problems like it’s my favorite hobby — because, honestly, it kind of is.</p>
   <img :src="require('../assets/images/april-sears.jpg')" alt="April Sears" class="profile-img" />
   <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/april-sears/" target="_blank" rel="noopener">LinkedIn</a> or check out my projects on <a href="https://github.com/aprilsears" target="_blank" rel="noopener">GitHub</a>.</p>
</template>
<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem;
  padding: 2rem;
  background-color: var(--color-surface-light);
  color: var(--color-text);

}
h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: var(--color-primary);
  margin: 4rem 0;
}
h2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin: 4rem 0;
}

p {
  margin: 1rem 0;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 1.5rem;
  font-size: 2rem;
 
}
.profile-img {
  position: absolute;
  top: 3rem;
  left: 3rem;
  height: 15rem;
  width: 15rem;
  border: 0.5rem solid white;
  border-radius: 2rem;
  object-fit: cover;
  z-index: 10;
}
</style>