const { execSync } = require("child_process");
const path = require("path");
const ffmpeg = require("ffmpeg-static");

const videos = [
  { input: "src/assets/video/testimonia-1.mp4", output: "src/assets/video/thumb-testimonial-1.jpg" },
  { input: "src/assets/video/testimonial-2.mp4", output: "src/assets/video/thumb-testimonial-2.jpg" },
  { input: "src/assets/video/testimonial-3.mp4", output: "src/assets/video/thumb-testimonial-3.jpg" },
  { input: "src/assets/video/testimonial-4.mp4", output: "src/assets/video/thumb-testimonial-4.jpg" },
  { input: "src/assets/video/the-big-mouth-pr-final-cut.mp4", output: "src/assets/video/thumb-our-story.jpg" },
];

videos.forEach(({ input, output }) => {
  const cmd = `"${ffmpeg}" -y -ss 00:00:01 -i "${input}" -vframes 1 -q:v 3 "${output}"`;
  console.log("Extracting:", path.basename(output));
  execSync(cmd, { stdio: "inherit" });
});
console.log("Done!");
