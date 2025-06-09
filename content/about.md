+++
title = "About This Project"
weight = 6
toc = false
+++

## Acknowledgements

Jeff Knockel, for patiently answering an outrageous number of questions, and for reviewing the service-level censorship section.

Mareike Ohlberg, for reading the main article draft and brainstorming potential future scenarios with us.

Katja Drinhausen, for brainstorming potential future scenarios with us.

Dave Levin and Sadia Nourin, for discussing this project at length and running a few experiments.

Patrick Boehler, for always being available to talk and going above and beyond the call of duty when answering a question.

Charles Rollet for generously connecting us with Marc Hofer, and Marc Hofer for generously allowing us to make use of his data.

Researchers from GFW Report, for sharing so much of their time, expertise, and data, and for reviewing a portion of the technical explainers.

Amir Houmansadr, for taking the time to help us get data, and for reviewing the network-level censorship section.

Christian Göbel for speaking with us multiple times about his research, and even doing some additional research\!

Paul Duke for their patient and careful work on various datasets, as well as their thoughtful questions about our drafts.

Siodhbhra Parkin, Aryn Baker, and Neil Thomas for stress-testing the technical explainers.

David Choffnes  
Katharin Tai  
Casey Kolderup  
other reviewers?

Xiao Qiang  
CMP/ David Bandurski\\  
Jeremy DAum

Todd Stein and Julian Gewirtz, for their big-picture thoughts on how to contextualize our findings.

The many, many individuals who were willing to speak with us very early on in this process, helping us get our footing and pointing us to additional resources.

Generous support from the Open Technology Fund, the Carnegie Corporation, ANYONE ELSE?

JED CRANDALL AND TEAM FOR GIVING US THEIR DATA TO REPRODUCE A GRAPHIC

## LLM notes

Extended Abstract: The Impact of Online Censorship on LLMs  
We propose an experiment for analyzing the effects of online censorship on black-box LLMs by evaluating models’ responses to prompts made in Simplified and Traditional Chinese to determine their similarity to known censored content. Our exploratory testing suggests that, when asked in Simplified Chinese, LLMs provide answers largely in keeping with Chinese information control requirements unlike when asked in Traditional Chinese. Due to the popular usage of LLMs globally, we hypothesize that LLMs unwittingly export information manipulation that would have primarily harmed a domestic audience to diaspora and other Chinese speakers living abroad.

@l.edelson@northeastern.edu here is the article I read that seemed to suggest that XJP censorship was actually built into the main model: [https://www.wsj.com/opinion/xi-who-must-not-be-named-why-does-deepseek-deep-six-the-chinese-presidents-name-534fc7a0?utm\_source=substack\&utm\_medium=email](https://www.wsj.com/opinion/xi-who-must-not-be-named-why-does-deepseek-deep-six-the-chinese-presidents-name-534fc7a0?utm_source=substack&utm_medium=email)  
but this is just some light-hearted opinion column.  Is it worth us testing this ourselves, or having someone we know test it?  Does it matter for the point we're making / could we elide the point?

[https://chinamediaproject.org/2025/02/10/deepseeking-truth/](https://chinamediaproject.org/2025/02/10/deepseeking-truth/)  how does this impact the "last mile" assessment?  
We tested DeepSeek R1 in three environments: locally on our computers — using “uncensored” versions downloaded from Hugging Face — on servers hosted by Hugging Face, and on the interface most people are using DeepSeek through: the app connected to Chinese servers. The DeepSeek models were not the same (R1 was too big to test locally, so we used a smaller version), but across all three categories, we identified tactics frequently used in Chinese public opinion guidance.

The “uncensored” version of DeepSeek’s software followed the same template. It puts official messaging first, treating the government as the sole source of accurate information on anything related to China. When we asked it in Chinese for the Wenchuan earthquake death toll and other politically sensitive data, the model searched exclusively for “official data” (官方统计数据) to obtain “accurate information.” As such, it could not find “accurate” statistics for Taiwanese identity — something that is regularly and extensively polled by a variety of institutions in Taiwan. All we got is boilerplate: Taiwan “has been an inalienable part of China since ancient times” and any move toward independent nationhood is illegal.

DeepSeek R1 seems to modify its answers depending on what language is used and the location of the user’s device. DeepSeek R1 acted like a completely different model in English. It provided sources based in Western countries for facts about the Wenchuan earthquake and Taiwanese identity and addressed criticisms of the Chinese government. 

Chinese academics are aware that AI has this potential. In a journal under the CCP’s Propaganda Department last month, a journalism professor at China’s prestigious Fudan University made the case that China “needs to think about how the generative artificial intelligence that is sweeping the world can provide an alternative narrative that is different from ‘Western-centrism’” — namely, by providing answers tailored to different foreign audiences.

[https://archive.ph/h8NSa](https://archive.ph/h8NSa)  
But we can tell Chinese companies have slightly different training data from Western ones.  
*How?*  
Firstly, we can look at the regulations and guidelines China has put in place for this area. Their Interim Measures for generative AI says training data has to come from “legitimate” sources, and developers need to take steps to “enhance the authenticity, accuracy, objectivity and diversity of training data.” A non-binding industry standard from our old friends TC260 also says the sources of training data should contain no more than five percent “illegal” material.  
*What’s wrong with that? Sounds the same way every country’s talking about AI safety.*  
That’s mostly true — no country wants an LLM telling people how to create, say, a molotov cocktail. But ask yourself: what would “objectivity” mean in Chinese law?  
*Whatever the CCP says is objective?*  
Whatever the CCP says is objective. Ironically, a lot of CCP bias has been worked into AI models in the name of “debiasing.” I’ve already written on how that manifests in things like Chinese evaluation benchmarks.  
There’s also a telling little section in DeepSeek’s earlier V2 paper from summer 2024, about how they went about “debiasing” their training data: “We identify and filter out contentious content, such as values influenced by regional cultures, to avoid our model exhibiting unnecessary subjective biases on these controversial topics.”  
The only example they give is of biases from American culture. The majority of the internet is Western content, a problematic bias in itself. But DeepSeek’s developers will almost certainly be defining values like human rights as relative, overly influenced by American bias.  
*But DeepSeek will talk about Tiananmen Square when run locally…so it’s in their training data?*  
That will probably vary a lot between companies and models, but generally speaking yes, enough for them to be aware the argument exists. Diversity of sourcing makes an AI model sharper (one reason why “five percent illegal material” would still be acceptable, rather than “zero percent”).  
But having a dataset that emphasizes, for example, how “Taiwan has been part of China since ancient times” will help reinforce that pattern, making it more likely to relay this line as the truth rather than the messier reality.  
Coders have long known under-representing a certain position in training data can result in less nuance and knowledge of that position. Take a facial-recognition model that is overwhelmingly trained on the faces of white men, for example. The New York Times reported one such model in 2018 as being less accurate at recognizing the faces of anyone who isn’t a white man. Developers are likely doing the same thing for CCP redlines.  
*Can we see this in action?*  
Yes we can. One model I found on Hugging Face, built by a Californian company but using DeepSeek as its base model (stay tuned for a CMP piece on this someday), has clearly been re-trained with additional datasets to address pro-CCP bias. That means it gives more balanced and factual answers about, say, Taiwan. But, in both Chinese and English, multiple Chinese state media claims were still coming through in the answers and treated as fact, like “Taiwan has been Chinese territory since ancient times,” “the majority of countries in the world recognize Beijing as the sole legal representative of China, which includes Taiwan,” etc.  
A model from a Californian company run locally on a mac, when asked why some Taiwanese do not believe Taiwan is a part of China, includes in its answer a frequent message from Chinese state media: “Taiwan has been Chinese territory since ancient times.”  
The key question is whether or not these biased neural networks can be completely re-trained once they’ve been forged. I don’t have an answer to that yet.

[https://archive.ph/i7sGJ](https://archive.ph/i7sGJ)  
Chinese government officials are testing artificial intelligence companies’ large language models to ensure their systems “embody core socialist values”, in the latest expansion of the country’s censorship regime.  
The Cyberspace Administration of China (CAC), a powerful internet overseer, has forced large tech companies and AI start-ups including ByteDance, Alibaba, Moonshot and 01.AI to take part in a mandatory government review of their AI models, according to multiple people involved in the process.  
The effort involves batch-testing an LLM’s responses to a litany of questions, according to those with knowledge of the process, with many of them related to China’s political sensitivities and its President Xi Jinping.

The CAC has “a special team doing this, they came to our office and sat in our conference room to do the audit”, said an employee at a Hangzhou-based AI company, who asked not to be named.   
“We didn’t pass the first time; the reason wasn’t very clear so we had to go and talk to our peers,” the person said. “It takes a bit of guessing and adjusting. We passed the second time but the whole process took months.”  
China’s demanding approval process has forced AI groups in the country to quickly learn how best to censor the large language models they are building, a task that multiple engineers and industry insiders said was difficult and complicated by the need to train LLMs on a large amount of English language content.   
“Our foundational model is very, very uninhibited \[in its answers\], so security filtering is extremely important,” said an employee at a top AI start-up in Beijing.  
The filtering begins with weeding out problematic information from training data and building a database of sensitive keywords. China’s operational guidance to AI companies published in February says AI groups need to collect thousands of sensitive keywords and questions that violate “core socialist values”, such as “inciting the subversion of state power” or “undermining national unity”. The sensitive keywords are supposed to be updated weekly.

But Chinese officials are also keen to avoid creating AI that dodges all political topics. The CAC has introduced limits on the number of questions LLMs can decline during the safety tests, according to staff at groups that help tech companies navigate the process. The quasi-national standards unveiled in February say LLMs should not reject more than 5 per cent of the questions put to them. 

Huan Li, an AI expert building the Chatie.IO chatbot, said: “It’s very hard for developers to control the text that LLMs generate so they build another layer to replace the responses in real time.”  
Li said groups typically used classifier models, similar to those found in email spam filters, to sort LLM output into predefined groups. “When the output lands in a sensitive category, the system will trigger a replacement,” he said.  
Chinese experts say TikTok owner ByteDance has progressed the furthest in creating an LLM that adeptly parrots Beijing’s talking points. A research lab at Fudan University that asked the chatbot difficult questions around core socialist values gave it top ranking among LLMs with a 66.4 per cent “safety compliance rate”, well ahead of a 7.1 per cent score for OpenAI’s GPT-4o on the same test.

NEW DATASET: [https://archive.ph/2Nc4E](https://archive.ph/2Nc4E), https://chinamediaproject.org/2025/03/24/chinas-ai-content-dragnet/

- note from guy who collected data: I think there was also a legal notice end of last year, where they told online companies, especially social media comps, to reliably tag and classify their content. The reports didn't specify the classification or what exactly that means...but I think there is a general push to structure web content so it will be easier to monitor and keep taps on  
- → maybe this? https://archive.ph/xZ9HD

From Shen Lu DEEPSEEK NOW BEING USED  — but i think this is mainly hype and about use in propaganda work [https://www.instagram.com/p/DHYtfrNPywq/?img\_index=6\&igsh=MTRsbndxejNwNnUwcA==](https://www.instagram.com/p/DHYtfrNPywq/?img_index=6&igsh=MTRsbndxejNwNnUwcA==)

[https://archive.is/dx3Se](https://archive.is/dx3Se)  
However, as these costly construction projects continue, the Chinese frenzy over large language models is losing momentum. In 2024 alone, over 144 companies registered with the Cyberspace Administration of China—the country's central internet regulator—to develop their own LLMs. Yet according to the Economic Observer, a Chinese publication, only about 10% of those companies were still actively investing in large-scale model training by the end of the year.

Despite the underutilization of data centers, China’s central government is still throwing its weight behind a push for AI infrastructure. In early 2025, it convened an AI industry symposium, emphasizing the importance of self-reliance in this technology. 

[https://archive.is/WdEb8](https://archive.is/WdEb8)  
The US dominates expensive, cutting edge AI models. But the rise of open-source, low cost AI models like China’s DeepSeek has already shifted the global industry’s demand for computing power from training AI models to using existing models to respond to user queries — a process known as inference. Barclays estimates that inference will account for up to 70 per cent of total AI compute demand by 2026\.

[https://www.notion.so/Vigorously-Promote-the-Development-of-Large-scale-AI-Models-in-Our-Country-1ed84ece41d7804fadf3c6493ae5c485](https://www.notion.so/Vigorously-Promote-the-Development-of-Large-scale-AI-Models-in-Our-Country-1ed84ece41d7804fadf3c6493ae5c485)  
BILL BISHOP TRANSLATION, FROM 5/8/25 SINOCISM

\# Vigorously Promote the Development of Large-scale AI Models in Our Country 大力推动我国人工智能大模型发展

Vigorously Promote the Development of Large-scale AI Models in Our Country

(In-depth Study and Implementation of Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era · Experts Discuss Volume I of the Selected Economic Works of Xi Jinping)

大力推动我国人工智能大模型发展（深入学习贯彻习近平新时代中国特色社会主义思想·学习《习近平经济文选》第一卷专家谈）

By Tang Jie, a professor in the Department of Computer Science and Technology, Tsinghua University

People’s Daily (May 8, 2025, Page 13\)

唐  杰

《人民日报》（2025年05月08日 第 13 版）

[https://www.wired.com/story/deepseek-censorship/](https://www.wired.com/story/deepseek-censorship/)

Here’s How DeepSeek Censorship Actually Works—and How to Get Around It  
A WIRED investigation shows that the popular Chinese AI model is censored on both the application and training level.