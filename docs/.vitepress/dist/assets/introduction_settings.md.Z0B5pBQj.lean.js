import{_ as n,c as o,o as s,m as t,a as e}from"./chunks/framework.isgf4Vyz.js";const $=JSON.parse('{"title":"模型设置","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/settings.md","filePath":"introduction/settings.md"}'),a={name:"introduction/settings.md"},r=t("h1",{id:"模型设置",tabindex:"-1"},[e("模型设置 "),t("a",{class:"header-anchor",href:"#模型设置","aria-label":'Permalink to "模型设置"'},"​")],-1),i=t("p",null,"使用提示词时，您会通过 API 或直接与大语言模型进行交互。你可以通过配置一些参数以获得不同的提示结果。",-1),c=t("p",null,[t("strong",null,"Temperature"),e("：简单来说，temperature 的参数值越小，模型就会返回越确定的一个结果。如果调高该参数值，大语言模型可能会返回更随机的结果，也就是说这可能会带来更多样化或更具创造性的产出。我们目前也在增加其他可能 token 的权重。在实际应用方面，对于质量保障（QA）等任务，我们可以设置更低的 temperature 值，以促使模型基于事实返回更真实和简洁的结果。 对于诗歌生成或其他创造性任务，你可以适当调高 temperature 参数值。")],-1),l=t("p",null,[t("strong",null,"Top_p"),e("：同样，使用 top_p（与 temperature 一起称为核采样的技术），可以用来控制模型返回结果的真实性。如果你需要准确和事实的答案，就把参数值调低。如果你想要更多样化的答案，就把参数值调高一些。")],-1),_=t("p",null,"一般建议是改变其中一个参数就行，不用两个都调整。",-1),d=t("p",null,"在我们开始一些基础示例之前，请记住最终生成的结果可能会和使用的大语言模型的版本而异。",-1),p=[r,i,c,l,_,d];function u(m,h,f,g,x,k){return s(),o("div",null,p)}const B=n(a,[["render",u]]);export{$ as __pageData,B as default};
