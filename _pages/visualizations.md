---
title: "Visualizations"
layout: splash
permalink: /sample-visualizations/
header:
  overlay_color: "#000"
  overlay_image: /assets/images/1600x800.png
excerpt: "Sample data visualizations from Datamethods."
intro: 
  - excerpt: ''
gallery:
  - url: /assets/images/visualizations/1.gif
    image_path: /assets/images/visualizations/600x400_1.png
    alt: "600x400_1.png"
    title: "Netflix Titles Proportional Symbol Map"
  - url: /assets/images/visualizations/2.gif
    image_path: /assets/images/visualizations/600x400_2.png
    alt: "600x400_2.png"
    title: "COVID Cases Proportional Symbol Map"
  - url: /assets/images/visualizations/3.png
    image_path: /assets/images/visualizations/600x400_3.png
    alt: "600x400_3.png"
    title: "Climate Change Wordcloud"
  - url: /assets/images/visualizations/4.png
    image_path: /assets/images/visualizations/600x400_4.png
    alt: "600x400_4.png"
    title: "USA Flights Geospatial Map"
  - url: /assets/images/visualizations/5.png
    image_path: /assets/images/visualizations/600x400_5.png
    alt: "600x400_5.png"
    title: "Formant & MFCC Scatter Plot"
  - url: /assets/images/visualizations/6.png
    image_path: /assets/images/visualizations/600x400_6.png
    alt: "600x400_6.png"
    title: "Iris Flower Histogram"
  - url: /assets/images/visualizations/7.png
    image_path: /assets/images/visualizations/600x400_7.png
    alt: "600x400_7.png"
    title: "News Media Network Graph (Kamada Kawai Layout)"
  - url: /assets/images/visualizations/8.png
    image_path: /assets/images/visualizations/600x400_8.png
    alt: "600x400_8.png"
    title: "Netflix Titles Movie Network Graph"
  - url: /assets/images/visualizations/9.png
    image_path: /assets/images/visualizations/600x400_9.png
    alt: "600x400_9.png"
    title: "Netflix Titles TV Shows Sunburst Chart"
  - url: /assets/images/visualizations/10.png
    image_path: /assets/images/visualizations/600x400_10.png
    alt: "600x400_10.png"
    title: "Anscombe Quartet Scatter Plot"   
  - url: /assets/images/visualizations/11.png
    image_path: /assets/images/visualizations/600x400_11.png
    alt: "600x400_11.png"
    title: "Twitch Attributes Correlation Heatmap"
  - url: /assets/images/visualizations/12.png
    image_path: /assets/images/visualizations/600x400_12.png
    alt: "600x400_12.png"
    title: "Video Games Annual Sales Line Chart"
outro: 
  - url: "https://github.com/blalelimit/datamethods"
    btn_label: "More on Datamethods"
    btn_class: "btn--inverse"
---

{% highlight python %}
# Libraries utilized
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
import plotly.express as px
import plotly.graph_objects as go
import wordcloud
import networkx
{% endhighlight %}

{% include gallery caption="These are examples of data visualizations generated through **Python** using **Jupyter Notebook**." %}

{% include feature_row id="outro" type="center" %}