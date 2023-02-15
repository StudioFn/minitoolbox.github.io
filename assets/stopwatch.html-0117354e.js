import{_ as e,X as a,Y as t,a2 as i}from"./framework-8b8a807b.js";const c={},p=i('<h1 id="ui-秒表" tabindex="-1"><a class="header-anchor" href="#ui-秒表" aria-hidden="true">#</a> UI - 秒表</h1><h2 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> 效果演示</h2><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821534" alt="效果演示"></p><h2 id="大致内容" tabindex="-1"><a class="header-anchor" href="#大致内容" aria-hidden="true">#</a> 大致内容</h2><p>在此教程中，你将会学习到以下内容：</p><ol><li>灵活运用数值运算中的各种函数</li><li>巧妙使用字符串拼接函数</li></ol><p>秒表是日常生活中经常会使用到的一个计时工具，正常情况下，秒表一般只会计时到分钟单位，那么为何不使用UI编辑器在游戏中制作一个秒表呢？</p><p>这里先科普一下，1000毫秒 = 1秒 ，但是一般情况下毫秒位只会显示2位，所以在此教程中毫秒位将使用100这个数值为基准以方便制作</p><p>但是在迷你世界中，最小的计时单位为tick，1秒 = 20tick，即0.05秒，50毫秒，所以在此教程中，最小的计时数为0.05秒，即50毫秒（划重点）</p><p>接下来教程正式开始</p><h2 id="进入教学" tabindex="-1"><a class="header-anchor" href="#进入教学" aria-hidden="true">#</a> 进入教学</h2><h3 id="预先准备" tabindex="-1"><a class="header-anchor" href="#预先准备" aria-hidden="true">#</a> 预先准备</h3><p>首先需要准备如下UI</p><p>分别命名为时间、计时开关、重置</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821037" alt="UI准备"></p><p>创建4个变量，数值的默认值都为0，布尔值的默认值为假</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821072" alt="变量"></p><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h3><p>接下来分别制作开始计时、暂停计时、重置计时触发器</p><p>步骤较为简单，直接照抄即可</p><h4 id="开始计时" tabindex="-1"><a class="header-anchor" href="#开始计时" aria-hidden="true">#</a> 开始计时</h4><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821104" alt="开始计时"></p><h4 id="暂停计时" tabindex="-1"><a class="header-anchor" href="#暂停计时" aria-hidden="true">#</a> 暂停计时</h4><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821150" alt="暂停计时"></p><p>这里说一下等待0.01秒的作用，因为这2个触发器对应的是同一个按钮，由于触发器是由上往下依次运行的，所以如果不加等待时间，其中一个触发器就会失效</p><p>按钮56和按钮21分别为右箭头和暂停，如图</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821185" alt="按钮图标"></p><h4 id="重置计时" tabindex="-1"><a class="header-anchor" href="#重置计时" aria-hidden="true">#</a> 重置计时</h4><p>图中的房主为显示计时的玩家，可以自行设定</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821218" alt="重置计时"></p><h4 id="计时触发器" tabindex="-1"><a class="header-anchor" href="#计时触发器" aria-hidden="true">#</a> 计时触发器</h4><p>接下来就是核心触发器，计时触发器</p><p>先看总体，0.05秒即为1tick，前面有说</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821254" alt="计时触发器"></p><p>先看毫秒位的动作</p><p>这里说一下为什么是加5而不是加50，之前说过，1tick = 0.05秒，同时又为了让毫秒位只显示2位，所以将使用100为基准，而不是1000，所以这里是加5而不是加50</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821279" alt="毫秒位"></p><p>计算秒位和分位时都使用取整计算</p><p>例如当毫秒位为160时，即1.6秒，此时设置秒位为 ( 160除以100 ) 并向下取整</p><p>即160÷100=1……60并舍去余数</p><p>计算分位同理，只是改成了秒位除以60</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821309" alt="分位"></p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821363" alt="时位"></p><p>最后是显示计时的动作</p><p>流程较长先看再讲</p><p>首先是秒位，其中的（ 毫秒位 Mod 100 ）是取余函数</p><p>例如当毫秒位为185时，185÷100=1……85 ，此时毫秒位就会显示85</p><p>秒位同理，只是将100改成60</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821409" alt="显示秒位1"></p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821449" alt="显示秒位2"></p><p>分位就很简单粗暴了，不需要进行计算</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821510" alt="显示分位"></p><h2 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果" aria-hidden="true">#</a> 最终效果</h2><p>完成以上操作之后，秒表就做好了</p><p><img src="https://kfz-static.mini1.cn/college/dev_college_oa/1644480821534" alt="最终效果"></p>',55),l=[p];function h(s,r){return a(),t("div",null,l)}const n=e(c,[["render",h],["__file","stopwatch.html.vue"]]);export{n as default};
