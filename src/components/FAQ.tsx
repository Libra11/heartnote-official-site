import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "心记（HeartNote）需要强制联网或注册账号吗？",
    a: "完全不需要。心记是一款 100% 离线优先的应用，您可以在飞行模式下畅行无阻地使用所有核心功能（唯有自定义开启云备份时需使用网络）。"
  },
  {
    q: "如果我换手机了，日记本数据能迁移吗？",
    a: "可以的！心记提供「无损导出与导入」模块，您可以将整个应用数据打包为专属备份格式，在新设备上一键还原，连同一张图片都不会少。"
  },
  {
    q: "私密模式是如何工作的？",
    a: "您可以将任意一篇日记或一整个模块设为「私密」。它会自动在搜索与预览列表中隐藏正文。只有在主菜单中用面容（FaceID）或指纹成功验证您设定的数字密码后才会显现。"
  },
  {
    q: "支持跨平台（如 iOS 和 Android 同时）同步阅读吗？",
    a: "心记目前坚持坚如磐石的单设备纯净原则，没有官方同步服务器以防泄露。但你可以通过内置配置 OSS 对象存储参数（如阿里云等）来实现多个客户端从自己专属网络获取加密包裹实现云覆写。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container" style={{ paddingBlock: '120px' }}>
       <div className="section-header reveal" style={{ maxWidth: '100%', textAlign: 'center' }}>
        <h2>解答您的顾虑</h2>
        <p>透明沟通，让记录毫无负担。</p>
      </div>

      <div className="faq-list reveal delay-200">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${idx === openIndex ? 'active' : ''}`}
            onClick={() => setOpenIndex(idx === openIndex ? null : idx)}
          >
             <div className="faq-q">
               <h4>{faq.q}</h4>
               <ChevronDown className="faq-icon" />
             </div>
             <div className="faq-a">
               <p>{faq.a}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
