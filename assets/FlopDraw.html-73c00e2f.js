import{_ as a,X as p,Y as t,a2 as e}from"./framework-8b8a807b.js";const r={},h=e('<h1 id="ui-翻牌抽奖" tabindex="-1"><a class="header-anchor" href="#ui-翻牌抽奖" aria-hidden="true">#</a> UI - 翻牌抽奖</h1><h2 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> 效果演示</h2><p><img src="https://s1.ax1x.com/2022/08/11/vGmJtH.gif" alt="效果演示"></p><p><strong>温馨提示</strong>：教程中的有后缀数字的UI元件、触发器等（变量除外），如未特别说明，均可直接复制粘贴后，修改必要内容即可</p><h2 id="ui布局" tabindex="-1"><a class="header-anchor" href="#ui布局" aria-hidden="true">#</a> UI布局</h2><p><strong>请仔细分析下面这张布局</strong></p><p><img src="https://s1.ax1x.com/2022/08/11/vGmeh9.png" alt="UI布局"></p><p>**特别注意牌、奖励左上角的文本框元件！**该元件非常关键，不可缺失，作为定位点，将牌、奖励元件作为文本框元件的子元件后，即可使牌、奖励元件的X、Y坐标均为0，方便制作动画。</p><p>如下图：</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmVk4.png" alt="文本框定位效果"></p><h2 id="触发器制作" tabindex="-1"><a class="header-anchor" href="#触发器制作" aria-hidden="true">#</a> 触发器制作</h2><p>先看总览：</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmA7F.png" alt="触发器总览"></p><p><strong>请准备好以下变量</strong>（注意还有个数值变量 - 数值01，不要遗漏了）</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmZtJ.png" alt="变量库"></p><p>奖池内的道具可自行选择</p><p>除了奖池，其他的变量均为默认值</p><h3 id="刷新奖励" tabindex="-1"><a class="header-anchor" href="#刷新奖励" aria-hidden="true">#</a> 刷新奖励</h3><p>按下&quot;点我刷新&quot;按钮后刷新奖励，可以根据需求添加抽奖货币条件等</p><p>较为简单，直接看图</p><p>其中循环的从1到10，因为本教程计划翻牌动画时长为1s，所以是10，如果你想要改变动画时长，例如0.5s则为5,2s则为20，可视情况修改</p><p>如果想要更加真实的翻牌动画，可以在第2个循环之前，修改牌的样式，这里没有修改，后面的 翻牌 - 动画 触发器也是如此</p><p>&quot;是否能翻牌&quot;变量用于防止玩家在牌还未刷新之前就直接翻牌</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmu11.png" alt="刷新奖励"></p><h3 id="刷新奖励-动画" tabindex="-1"><a class="header-anchor" href="#刷新奖励-动画" aria-hidden="true">#</a> 刷新奖励 - 动画</h3><p>该触发器没有事件，也没有条件，只有动作，但是动作很多，先看总览：</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmMX6.png" alt="刷新奖励 - 动作总览"></p><p>注意图片右边的序号，接下来将根据序号进行讲解</p><p>其中，未标明序号的动作均只需直接复制粘贴后，修改元件即可，其他无需更改</p><h4 id="动作-1" tabindex="-1"><a class="header-anchor" href="#动作-1" aria-hidden="true">#</a> 动作 - 1</h4><p>较为简单，不放图</p><p>设置 &quot;数值01&quot; 为 数值运算 ==&gt;（ &quot;数值01&quot; 加 1 ）</p><h4 id="动作-2" tabindex="-1"><a class="header-anchor" href="#动作-2" aria-hidden="true">#</a> 动作 - 2</h4><p>其中，150为牌元件的长，可视情况修改</p><p>15 为 150/10=15，这里再次说明一下为什么是除以10，因为本教程计划翻牌动画时长为1s，所以是10，如果你想要改变动画时长，例如0.5s则为5,2s则为20，可视情况修改</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmnpR.png" alt="动作 - 2"></p><h4 id="动作-3" tabindex="-1"><a class="header-anchor" href="#动作-3" aria-hidden="true">#</a> 动作 - 3</h4><p>其中，100为奖励元件的长，可视情况修改</p><p>10 为 100/10=10，原因同上</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmK6x.png" alt="动作 - 3"></p><h4 id="动作-4" tabindex="-1"><a class="header-anchor" href="#动作-4" aria-hidden="true">#</a> 动作 - 4</h4><p>75 为 150/2=75</p><p>7.5 为 150/2/10=7.5，原因同上</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmlnK.png" alt="动作 - 4"></p><h4 id="动作-5" tabindex="-1"><a class="header-anchor" href="#动作-5" aria-hidden="true">#</a> 动作 - 5</h4><p>50 为 100/2=50</p><p>5 为 100/2/10=5，原因同上</p><p><img src="https://s1.ax1x.com/2022/08/11/vGm10O.png" alt="动作 - 5"></p><p>最后不要忘了添加一个等待0.05s的动作，这样就实现了刷新奖励的效果</p><h3 id="翻牌" tabindex="-1"><a class="header-anchor" href="#翻牌" aria-hidden="true">#</a> 翻牌</h3><p>直接看图：</p><p>&quot;是否翻过牌&quot;变量用于记录玩家翻过的牌，防止二次翻牌</p><p><img src="https://s1.ax1x.com/2022/08/11/vGm37D.png" alt="翻牌"></p><h3 id="翻牌-动画" tabindex="-1"><a class="header-anchor" href="#翻牌-动画" aria-hidden="true">#</a> 翻牌 - 动画</h3><p>依旧是只有动作，均可直接把触发器：刷新奖励 - 动画 中的 动作 - 1 ~ 5 直接复制过来，最后加上等待时间动作即可</p><p><img src="https://s1.ax1x.com/2022/08/11/vGmGAe.png" alt="翻牌 - 动画"></p><p>3个翻牌触发器均可直接复制粘贴，翻牌 - 动画也一样，别忘了将必要的变量、元件修改一下，这样就完成了</p>',57),s=[h];function i(d,n){return p(),t("div",null,s)}const o=a(r,[["render",i],["__file","FlopDraw.html.vue"]]);export{o as default};
