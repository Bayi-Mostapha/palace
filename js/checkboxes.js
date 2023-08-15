const tableRows = document.querySelectorAll('.mb-table tr');

if (tableRows)
    tableRows.forEach(tableRow => {
        const switchContainer = tableRow.querySelector('.select-all-switch');
        const switchBtn = switchContainer.querySelector('.select-all-switch-btn');
        const checkBoxs = tableRow.querySelectorAll('input[type="checkbox"]');
        let occ = 0;

        checkBoxs.forEach(checkBox => {
            if (checkBox.checked)
                occ++;
        });
        if (occ === checkBoxs.length) {
            switchBtn.classList.add('on');
        } else {
            switchBtn.classList.remove('on');
        }

        switchContainer.addEventListener('click', () => {
            if (switchBtn.classList.contains('on')) {
                checkBoxs.forEach(checkBox => {
                    checkBox.checked = true;
                });
            } else {
                checkBoxs.forEach(checkBox => {
                    checkBox.checked = false;
                });
            }
        });

        checkBoxs.forEach(checkBox => {
            checkBox.addEventListener('change', () => {
                let occ = 0;
                checkBoxs.forEach(checkBox => {
                    if (checkBox.checked)
                        occ++;
                });
                if (occ === checkBoxs.length) {
                    switchBtn.classList.add('on');
                } else {
                    switchBtn.classList.remove('on');
                }
            })
        });
    });