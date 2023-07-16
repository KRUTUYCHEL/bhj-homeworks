const applyRotator = (cardEl) => {
  const caseEls = [...cardEl.querySelectorAll(".rotator__case")];
  const speeds = caseEls.map(p => +p.dataset.speed);

  caseEls.forEach(p => p.style.color = p.dataset.color);
  const sum = speeds.reduce((a, v) => a + v, 0);
  
  for (let i = 0; i < caseEls.length; i++){
    let aggrSpeed = 0;
    for (let j = i; j >= 0; j--)
      aggrSpeed += speeds[j];
    
    setTimeout(() => {
      const next = i + 1 >= caseEls.length ? 0 : i + 1;

      caseEls[i].classList.remove("rotator__case_active")
      caseEls[next].classList.add("rotator__case_active")
      
      setInterval(() =>{
        caseEls[i].classList.remove("rotator__case_active")
        caseEls[next].classList.add("rotator__case_active")
      }, sum);
    }, aggrSpeed)
  }
}

[...document.querySelectorAll('.rotator')].forEach(applyRotator)
