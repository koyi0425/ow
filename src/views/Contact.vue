<template>
    <div class="contact">
        <Header />
        <div class="content">
            <h1>Contact Us</h1>
            <el-row :gutter="40">
                <el-col :span="12">
                    <div class="contact-info">
                        <h2>Get in Touch</h2>
                        <p>We'd love to hear from you. Please fill out the form or contact us directly.</p>

                        <div class="info-item">
                            <i class="el-icon-location"></i>
                            <span>123 Business Street, Global City, 10001</span>
                        </div>

                        <div class="info-item">
                            <i class="el-icon-phone"></i>
                            <span>+1 (123) 456-7890</span>
                        </div>

                        <div class="info-item">
                            <i class="el-icon-message"></i>
                            <span>info@globaltrade.com</span>
                        </div>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form :model="contactForm" :rules="rules" ref="contactForm" label-width="120px">
                        <el-form-item label="Name" prop="name">
                            <el-input v-model="contactForm.name"></el-input>
                        </el-form-item>

                        <el-form-item label="Email" prop="email">
                            <el-input v-model="contactForm.email"></el-input>
                        </el-form-item>

                        <el-form-item label="Subject" prop="subject">
                            <el-input v-model="contactForm.subject"></el-input>
                        </el-form-item>

                        <el-form-item label="Message" prop="message">
                            <el-input type="textarea" v-model="contactForm.message" :rows="6"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="submitForm('contactForm')">Send Message</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Contact',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Please enter your name', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Please enter your email', trigger: 'blur' },
                    { type: 'email', message: 'Please enter a valid email', trigger: 'blur' }
                ],
                subject: [
                    { required: true, message: 'Please enter the subject', trigger: 'blur' }
                ],
                message: [
                    { required: true, message: 'Please enter your message', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 这里可以添加表单提交的逻辑
                    this.$message.success('Message sent successfully!')
                    this.contactForm = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.contact {
    padding-top: 80px;
    min-height: 100vh;
    background-color: #f9f9f9;
}

.content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #333;
}

.contact-info {
    padding: 20px;
}

.contact-info h2 {
    color: #333;
    margin-bottom: 20px;
}

.contact-info p {
    color: #666;
    margin-bottom: 30px;
    line-height: 1.6;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.info-item i {
    font-size: 20px;
    color: #409EFF;
    margin-right: 15px;
}

.info-item span {
    color: #666;
}

.el-form {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .el-col {
        width: 100%;
    }

    .contact-info {
        margin-bottom: 30px;
    }
}
</style>