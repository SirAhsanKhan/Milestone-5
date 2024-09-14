var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
// Get input elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Get display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
// Add event listeners for real-time updates
nameInput.addEventListener('input', function () {
    displayName.textContent = nameInput.value || 'Your Name';
});
emailInput.addEventListener('input', function () {
    displayEmail.textContent = emailInput.value || 'Your Email';
});
experienceInput.addEventListener('input', function () {
    displayExperience.textContent = experienceInput.value || 'Your experience goes here.';
});
skillsInput.addEventListener('input', function () {
    displaySkills.textContent = skillsInput.value || 'Your skills go here.';
});
// Function to save resume and get a shareable URL
function saveResume() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, shareableURL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/saveResume', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: nameInput.value,
                            email: emailInput.value,
                            experience: experienceInput.value,
                            skills: skillsInput.value,
                        }),
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (response.ok) {
                        shareableURL = window.location.origin + data.url;
                        alert("Resume saved! Shareable URL: ".concat(shareableURL));
                    }
                    else {
                        alert("Error: ".concat(data.message));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Function to download resume as PDF
function downloadPDF() {
    return __awaiter(this, void 0, void 0, function () {
        var resumeElement, options;
        return __generator(this, function (_a) {
            resumeElement = document.querySelector('#resume-preview');
            options = {
                margin: 0.5,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumeElement).set(options).save();
            return [2 /*return*/];
        });
    });
}
// Add event listeners to buttons
(_a = document.getElementById('save-url')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveResume);
(_b = document.getElementById('download-pdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadPDF);
