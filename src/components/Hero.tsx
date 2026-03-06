/**
 * Author: Libra
 * Date: 2026-02-20 23:25:46
 * LastEditTime: 2026-03-06 16:23:17
 * LastEditors: Libra
 * Description: 
*/
import { Download, Sparkles, Image, Lock } from 'lucide-react';
import MockupDevice from './MockupDevice';
import { downloadDefault } from '../utils/download';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 20px', 
            background: 'var(--bg-panel-solid)', 
            borderRadius: '100px', 
            fontSize: '13px', 
            fontWeight: 700,
            letterSpacing: '0.5px',
            marginBottom: '40px', 
            border: '1px solid var(--border-light)', 
            color: 'var(--text-main)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Sparkles size={14} color="var(--accent)" />
            <span>全新 1.0.0 正式发布</span>
          </div>
          
          <h1>
            留存心跳回声的<br/>
            <em>数字记忆空间。</em>
          </h1>
          
          <p>
            抛开喧嚣的网络社交，回到记录的本质。
            心记（HeartNote）基于离线架构与高雅美学，为您提供极度沉浸且安全的私人日记体验。
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={downloadDefault}>
              <Download size={18} strokeWidth={2.5} />
              立即下载体验
            </button>
          </div>
          
          <div className="hero-meta" style={{ marginTop: '56px', display: 'flex', gap: '32px', color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Lock size={16} /> 本地隔离</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Image size={16} /> Block 富文本流</span>
          </div>
        </div>
        
        <div className="hero-visual animate-scale-in delay-200">
          <MockupDevice variant="dashboard" />
          
          {/* Aesthetic floating decoration pieces */}
          <div className="hero-decorator dec-1">
             <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
               <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>🍂</span>
               </div>
               <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>那年今日</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>回忆触手可及</div>
               </div>
             </div>
          </div>
          
          <div className="hero-decorator dec-2">
             <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
               <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--accent-sec)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lock size={20} color="var(--accent-sec-dark)" />
               </div>
               <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>生物识别锁定</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>隐私不泄漏</div>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
