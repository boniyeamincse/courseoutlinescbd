document.addEventListener("DOMContentLoaded", () => {
  const gridElement = document.getElementById("coursesGrid");
  const searchInput = document.getElementById("searchInput");
  const filterPills = document.querySelectorAll(".pill-btn");
  const resultsCount = document.getElementById("resultsCount");
  const toast = document.getElementById("toast");

  let activeCategory = "all";
  let searchQuery = "";

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  function renderCourses() {
    if (!gridElement) return;

    const filtered = COURSES.filter((course) => {
      const matchCategory =
        activeCategory === "all" || course.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.level.toLowerCase().includes(q) ||
        course.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });

    resultsCount.textContent = `${filtered.length}টি কোর্স আউটলাইন পাওয়া গেছে`;

    if (filtered.length === 0) {
      gridElement.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: rgba(13,34,53,0.4); border-radius: 12px; border: 1px dashed var(--line);">
          <p style="font-size: 16px; color: var(--muted); margin-bottom: 12px;">কোনো কোর্স পাওয়া যায়নি।</p>
          <button class="btn btn-outline btn-sm" onclick="resetFilters()">ফিল্টার রিসেট করুন</button>
        </div>
      `;
      return;
    }

    gridElement.innerHTML = filtered
      .map((course) => {
        const isLive = course.badgeType === "live";
        const badgeClass = isLive ? "badge-live" : "badge-upcoming";
        const dotMarkup = isLive ? `<span class="status-dot"></span>` : "";

        // Build absolute or relative URL
        const fullShareUrl = window.location.origin
          ? `${window.location.origin}${course.outlineUrl}`
          : course.outlineUrl;

        return `
        <article class="course-box" data-id="${course.id}" onclick="navigateToCourse('${course.outlineUrl}', event)" onkeydown="handleBoxKeyDown('${course.outlineUrl}', event)" role="link" tabindex="0" title="আউটলাইন দেখতে ক্লিক করুন">
          <div class="box-glow-bar"></div>
          <div class="course-box-body">
            <div class="box-header">
              <div class="box-icon-wrap" aria-hidden="true">
                ${course.icon || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`}
              </div>
              <div class="box-badge-wrap">
                <span class="badge ${badgeClass}">
                  ${dotMarkup}
                  ${course.statusText}
                </span>
                <span class="level-tag">${course.level}</span>
              </div>
            </div>
            
            <h3 class="course-title">${course.title}</h3>
            <p class="course-desc">${course.description}</p>
            
            <div class="course-meta">
              <div class="meta-item">
                <span>ক্লাস ও সময়</span>
                <strong>${course.duration}</strong>
              </div>
              <div class="meta-item">
                <span>সময়সূচী</span>
                <strong>${course.schedule}</strong>
              </div>
            </div>

            <div class="tags-wrap">
              ${course.tags.map((t) => `<span class="tag-pill">#${t}</span>`).join("")}
            </div>

            <div class="box-footer">
              <div class="click-prompt">
                <span>সম্পূর্ণ আউটলাইন দেখুন</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
              <button type="button" class="btn-share-icon" onclick="copyCourseLink('${fullShareUrl}', '${course.title}', event)" title="Students-দের সাথে শেয়ার করতে লিংক কপি করুন">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                <span>শেয়ার</span>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  window.navigateToCourse = (url, event) => {
    // If user clicked the share button or a link inside, don't navigate
    if (event && (event.target.closest(".btn-share-icon") || event.target.closest("button"))) {
      return;
    }
    window.location.href = url;
  };

  window.handleBoxKeyDown = (url, event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = url;
    }
  };

  window.copyCourseLink = (url, title, event) => {
    if (event) {
      event.stopPropagation();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          showToast(`📋 "${title}"-এর আউটলাইন লিংক কপি হয়েছে!`);
        })
        .catch(() => {
          prompt("লিংকটি কপি করে শেয়ার করুন:", url);
        });
    } else {
      prompt("লিংকটি কপি করে শেয়ার করুন:", url);
    }
  };

  window.resetFilters = () => {
    activeCategory = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    filterPills.forEach((p) =>
      p.classList.toggle("active", p.dataset.category === "all")
    );
    renderCourses();
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCourses();
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      renderCourses();
    });
  });

  // Initial render
  renderCourses();
});
