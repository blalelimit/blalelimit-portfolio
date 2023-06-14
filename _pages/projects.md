---
title: "Projects"
layout: splash
permalink: /projects/
header:
  overlay_color: "#000"
  overlay_image: /assets/images/1600x800.png
excerpt: "My collegiate and personal projects."
intro: 
  - excerpt: ''
feature_row:
  - image_path: /assets/images/600x400_1.png
    alt: "Datamethods"
    title: "Datamethods"
    excerpt: "A simple repository that compiles several Data Analysis, Visualization, and Mining methods and techniques to analyze and discover patterns in different sets of data."
    url: "https://github.com/blalelimit/datamethods"
    btn_label: "Open"
    btn_class: "btn--inverse"
feature_row2:
  - image_path: /assets/images/600x400_2.png
    alt: "Media Processing"
    title: "Media Processing Python"
    excerpt: 'Format conversion application for image, audio, and video files with additional processing features. For instance, *.wav files can be converted to *.mp3, *.m4a, etc.'
    url: "https://github.com/blalelimit/media-processing-python"
    btn_label: "Open"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: /assets/images/600x400_3.png
    alt: "Assembly"
    title: "The Assembly"
    excerpt: 'The Assembly is an online store web application that sells pc related parts and peripherals, written in Java with the Model-View-Controller Framework'
    url: "https://github.com/blalelimit/the-assembly"
    btn_label: "Open"
    btn_class: "btn--inverse"
feature_row4:
  - title: "Java Projects Compilation"
    excerpt: 'A compilation of Java projects written throughout the years, which includes calculators, graphics, data structures, and more.'
    url: "https://github.com/blalelimit/java-projects-compilation"
    btn_label: "Open"
    btn_class: "btn--inverse"
outro: 
  - url: "https://github.com/blalelimit"
    btn_label: "More on GitHub"
    btn_class: "btn--inverse"
---

{% highlight python %}
# Driver Code
if __name__ == '__main__'
  main = BlaleLimit(show_projects=True)
  main.projects()
  print('Here are some of my projects.')
{% endhighlight %}

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row id="feature_row3" type="left" %}

{% include feature_row id="feature_row4" type="center" %}

{% include feature_row id="outro" type="center" %}