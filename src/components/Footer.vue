<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <ul class="contact-info">
                        <li>
                            <i class="el-icon-location"></i>
                            <span>123 Business Street, Global City, 10001</span>
                        </li>
                        <li>
                            <i class="el-icon-phone"></i>
                            <span>+1 (123) 456-7890</span>
                        </li>
                        <li>
                            <i class="el-icon-message"></i>
                            <span>info@globaltrade.com</span>
                        </li>
                        <li>
                            <i class="el-icon-user"></i>
                            <span>Miles</span>
                        </li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/products">Products</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div>

                <div class="footer-section footer-map-section">
                    <h3>Location Address</h3>
                    <a class="footer-map"
                        href="https://map.baidu.com/search/%E6%B1%9F%E8%8B%8F%E5%8D%97%E9%80%9A%E7%B4%AB%E7%90%85%E7%A7%91%E6%8A%80%E5%9F%8E11A"
                        target="_blank" rel="noopener noreferrer" aria-label="Open in Baidu Maps">
                        <div class="footer-map__inner">
                            <img class="footer-map__image" :src="baiduMapImage" alt="江苏南通紫琅科技城11A 地图" />
                            <div class="footer-map__overlay" aria-hidden="true">
                                <div class="footer-map__pin"></div>
                            </div>
                            <div class="footer-map__label">
                                <div class="footer-map__title">江苏南通紫琅科技城11A</div>
                                <div class="footer-map__addr">点击打开百度地图</div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="footer-section footer-qr">
                    <img :src="wechatQr" alt="WeChat QR Code" class="wechat-qr" />
                    <div class="qr-caption">WJL Label Trade Co.</div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom__inner">
                    <span class="icp">ICP备案号：ICPXXXXXXXX号</span>
                    <span class="sep">|</span>
                    <span class="copyright">&copy; {{ currentYear }} WJL Label Trade Co.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import baiduMapImage from '@/assets/baidu-map.png'
import wechatQr from '@/assets/wechat-qr.svg'

export default {
    name: 'Footer',
    data() {
        return {
            baiduMapImage,
            wechatQr,
            currentYear: new Date().getFullYear(),
        }
    },
}
</script>

<style scoped>
.site-footer {
    background:
        linear-gradient(180deg, rgba(10, 18, 28, 0.92), rgba(10, 18, 28, 0.96)),
        url('~@/assets/city-night.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    padding: 60px 0 20px;
    position: relative;
    overflow: hidden;
}

.site-footer::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
        repeating-linear-gradient(135deg,
            rgba(255, 255, 255, 0.04) 0,
            rgba(255, 255, 255, 0.04) 1px,
            rgba(0, 0, 0, 0.12) 1px,
            rgba(0, 0, 0, 0.12) 9px);
    opacity: 0.14;
    mix-blend-mode: overlay;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
    z-index: 1;
}

.footer-section {
    flex: 1;
    min-width: 250px;
    margin-bottom: 30px;
    padding: 0 15px;
}

.footer-map-section {
    min-width: 300px;
}

.footer-section h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-section h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: #409EFF;
}

.footer-section p {
    color: #ecf0f1;
    line-height: 1.6;
    margin-bottom: 20px;
}

.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: #409EFF;
}

.footer-map {
    display: block;
    margin: 6px 0 18px;
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

.footer-map::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 30% 20%, rgba(64, 158, 255, 0.35), transparent 55%),
        radial-gradient(circle at 70% 75%, rgba(103, 194, 58, 0.25), transparent 60%),
        linear-gradient(135deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.03));
    opacity: 0.95;
}

.footer-map__inner {
    position: relative;
    z-index: 1;
    padding: 0;
    min-height: 160px;
    display: flex;
    align-items: stretch;
    background: rgba(0, 0, 0, 0.38);
    -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 62%, rgba(0, 0, 0, 0) 100%);
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 62%, rgba(0, 0, 0, 0) 100%);
}

.footer-map__image {
    width: 100%;
    height: 100%;
    min-height: 160px;
    object-fit: cover;
    display: block;
    filter: saturate(0.95) contrast(1.05);
}

.footer-map__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    background:
        radial-gradient(circle at center, rgba(0, 0, 0, 0.00) 40%, rgba(0, 0, 0, 0.35) 100%);
}

.footer-map__pin {
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: #ff4d4f;
    box-shadow:
        0 0 0 6px rgba(255, 77, 79, 0.16),
        0 0 22px rgba(255, 77, 79, 0.45);
    flex: 0 0 auto;
    position: relative;
}

.footer-map__pin::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 77, 79, 0.35);
    opacity: 0.9;
}

.footer-map__title {
    font-weight: 600;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: 4px;
}

.footer-map__label {
    position: absolute;
    left: 14px;
    bottom: 12px;
    right: 14px;
    z-index: 2;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(3, 8, 14, 0.55);
    backdrop-filter: blur(8px);
}

.footer-map__addr {
    color: rgba(236, 240, 241, 0.86);
    font-size: 13px;
    line-height: 1.4;
}

.contact-info {
    list-style: none;
    padding: 0;
}

.contact-info li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.contact-info i {
    margin-right: 10px;
    color: #409EFF;
}

.footer-qr {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 70px;
}

.wechat-qr {
    width: 140px;
    height: 140px;
    border-radius: 8px;
    background: #ffffff;
    padding: 6px;
    box-sizing: border-box;
}

.qr-caption {
    margin-top: 10px;
    color: #ecf0f1;
    font-size: 14px;
    text-align: right;
}

.footer-bottom {
    position: relative;
    z-index: 1;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-bottom__inner {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: rgba(236, 240, 241, 0.85);
    font-size: 13px;
}

.sep {
    opacity: 0.45;
}

@media (max-width: 768px) {
    .footer-section {
        flex: 100%;
        margin-bottom: 30px;
    }

    .footer-qr {
        align-items: flex-start;
    }

    .qr-caption {
        text-align: left;
    }

    .footer-map {
        max-width: 520px;
    }
}
</style>