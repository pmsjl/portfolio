// ==============================================
// 徐俊杰 · 个人简历网站 JS
// 主题切换 / 汉堡菜单 / 平滑滚动 / 滚动出现 / 弹窗复制
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    // ── 主题切换（localStorage 持久化）────────────
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        // 同步开关无障碍状态
        const syncPressed = () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        };
        syncPressed();

        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            syncPressed();
            try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
        });
    }

    // ── 导航栏：下滑隐藏、上滑显示 ────────────────
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ── 汉堡菜单（移动端）─────────────────────────
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            navToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
        });

        // 点击链接后收起菜单
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ── 平滑滚动（锚点 + 固定导航偏移）────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') { e.preventDefault(); return; }
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 2;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ── 区块滚动出现（跳过首屏 Hero）──────────────
    const sections = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        sections.forEach(section => observer.observe(section));
    } else {
        // 降级：直接全部显示
        sections.forEach(section => section.classList.add('visible'));
    }

    // ── 回到顶部按钮 ──────────────────────────────
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (!backToTop) return;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        backToTop.classList.toggle('show', scrollTop > 600);
    });

    // ── Footer 年份 ───────────────────────────────
    const yearEl = document.querySelector('.copyright');
    if (yearEl) {
        const year = new Date().getFullYear();
        yearEl.innerHTML = `© ${year} 徐俊杰 · 哈尔滨工业大学（深圳）`;
    }
});

// ==============================================
// 弹窗（邮箱 / 电话）
// ==============================================
function openEmailModal() {
    document.getElementById('emailModal').classList.add('active');
    document.getElementById('copyEmailHint').textContent = '';
}

function closeEmailModal() {
    document.getElementById('emailModal').classList.remove('active');
}

function closeEmailModalOverlay(e) {
    if (e.target === document.getElementById('emailModal')) closeEmailModal();
}

function copyEmail() {
    navigator.clipboard.writeText('2024311001@stu.hit.edu.cn').then(() => {
        const hint = document.getElementById('copyEmailHint');
        hint.textContent = '已复制到剪贴板！';
        setTimeout(() => { hint.textContent = ''; }, 2500);
    });
}

// 打开按钮绑定（HTML 结构在 DOMContentLoaded 后依然可用）
document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('emailBtn');
    if (emailBtn) emailBtn.addEventListener('click', openEmailModal);

    // Esc 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeEmailModal(); closeCertLightbox(); }
    });
});

// ==============================================
// 证书灯箱
// ==============================================
function openCert(src, caption) {
    const img = document.getElementById('certLightboxImg');
    img.src = src;
    img.alt = caption + '证书';
    document.getElementById('certLightboxCaption').textContent = caption;
    document.getElementById('certLightbox').classList.add('active');
}

function closeCertLightbox() {
    document.getElementById('certLightbox').classList.remove('active');
}

function closeCertLightboxOverlay(e) {
    if (e.target === document.getElementById('certLightbox')) closeCertLightbox();
}
