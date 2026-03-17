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
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            activeIndex: '/',
            currentLanguage: 'English'
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

.el-dropdown-link {
    cursor: pointer;
    color: #333;
    font-size: 14px;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        height: auto;
        padding: 10px;
    }

    .main-nav {
        margin: 10px 0;
        width: 100%;
    }
}
</style>