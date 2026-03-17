<template>
    <header class="site-header">
        <div class="header-container">
            <!-- 左侧 LOGO 和公司名称 -->
            <div class="logo-section">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="Company Logo" class="logo">
                <span class="company-name">WJL Label Trade Co.</span>
            </div>

            <!-- 中间导航 -->
            <el-menu :default-active="activeIndex" class="main-nav" mode="horizontal" @select="handleSelect"
                background-color="transparent" text-color="#333" active-text-color="#409EFF" router>
                <el-menu-item index="/">Home</el-menu-item>
                <el-menu-item index="/products">Products</el-menu-item>
                <el-menu-item index="/about">About Us</el-menu-item>
                <el-menu-item index="/contact">Contact</el-menu-item>
            </el-menu>

            <!-- 右侧语言切换 -->
            <div class="language-switch">
                <el-dropdown trigger="click" @command="handleLanguageChange">
                    <span class="el-dropdown-link">
                        {{ currentLanguage }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="en">English</el-dropdown-item>
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="es">Español</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <!-- 移动端菜单按钮 -->
            <el-button class="mobile-menu-btn" icon="el-icon-menu" @click="mobileMenuOpen = true" circle></el-button>
        </div>

        <!-- 移动端抽屉菜单 -->
        <el-drawer class="mobile-drawer" :visible.sync="mobileMenuOpen" direction="rtl" size="78%"
            :with-header="false" :append-to-body="true" :modal-append-to-body="true" :lock-scroll="false"
            :close-on-press-escape="true" :wrapper-closable="true">
            <div class="mobile-drawer__content">
                <div class="mobile-drawer__top">
                    <div class="mobile-drawer__title">Menu</div>
                    <el-button icon="el-icon-close" @click="mobileMenuOpen = false" circle></el-button>
                </div>

                <el-menu :default-active="activeIndex" class="mobile-nav" mode="vertical" @select="handleMobileSelect"
                    router>
                    <el-menu-item index="/">Home</el-menu-item>
                    <el-menu-item index="/products">Products</el-menu-item>
                    <el-menu-item index="/about">About Us</el-menu-item>
                    <el-menu-item index="/contact">Contact</el-menu-item>
                </el-menu>

                <div class="mobile-language">
                    <div class="mobile-language__label">Language</div>
                    <el-dropdown trigger="click" @command="handleLanguageChange">
                        <span class="el-dropdown-link">
                            {{ currentLanguage }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="en">English</el-dropdown-item>
                            <el-dropdown-item command="zh">中文</el-dropdown-item>
                            <el-dropdown-item command="es">Español</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-drawer>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            activeIndex: '/',
            currentLanguage: 'English',
            mobileMenuOpen: false,
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                this.activeIndex = to.path
            }
        }
    },
    methods: {
        handleSelect(key) {
            this.activeIndex = key
        },
        handleMobileSelect(key) {
            this.activeIndex = key
            this.mobileMenuOpen = false
        },
        handleLanguageChange(command) {
            this.currentLanguage = command === 'en' ? 'English' :
                command === 'zh' ? '中文' : 'Español'
            // 这里可以添加语言切换的逻辑

        }
    }
}
</script>

<style scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 100%;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}

.logo-section {
    display: flex;
    align-items: center;
}

.logo {
    width: 50px;
    height: 50px;
    margin-right: 15px;
}

.company-name {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.main-nav {
    flex: 1;
    display: flex;
    justify-content: center;
    border-bottom: none;
}

.main-nav .el-menu-item {
    font-size: 18px;
    font-weight: bold;
    padding: 0 25px;
    height: 80px;
    line-height: 80px;
}

.main-nav .el-menu-item:hover {
    color: #409EFF !important;
    background-color: transparent !important;
}

.main-nav .el-menu-item.is-active {
    color: #409EFF !important;
    border-bottom: 3px solid #409EFF !important;
}

.language-switch {
    margin-left: 20px;
}

.mobile-menu-btn {
    display: none;
    margin-left: 10px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #333;
    font-size: 14px;
}

@media (max-width: 768px) {
    .header-container {
        height: 64px;
        padding: 0 12px;
    }

    .company-name {
        font-size: 16px;
        max-width: 185px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .logo {
        width: 38px;
        height: 38px;
        margin-right: 10px;
    }

    .main-nav,
    .language-switch {
        display: none;
    }

    .mobile-menu-btn {
        display: inline-flex;
    }
}

.mobile-drawer__content {
    padding: 18px 16px 22px;
}

.mobile-drawer__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}

.mobile-drawer__title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
}

.mobile-nav {
    border-right: none;
}

.mobile-nav .el-menu-item {
    height: 48px;
    line-height: 48px;
}

.mobile-language {
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.mobile-language__label {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
</style>