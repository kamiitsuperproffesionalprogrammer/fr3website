import React from "react";

interface MusicPlayerProps {
  currentTime?: string;
  duration?: string;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentTime = "0:10",
  duration = "3:24",
  isPlaying = false,
  onPlayPause = () => {},
  onPrevious = () => {},
  onNext = () => {},
}) => {
  return (
    <div className="w-[471px] backdrop-blur-[3.5px] bg-[rgba(0,0,0,0.5)] mx-auto my-0 px-[15px] py-[13px] rounded-[20px] max-sm:w-[90%]">
      <div className="flex flex-col gap-[11px]">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09688c87aab049f8650ec8bde15fe1a0314ea617"
            className="w-[57.5px] h-[57.5px] rounded-[9px]"
            alt="Album cover"
          />
          <div className="flex flex-col">
            <div className="text-[rgba(255,255,255,0.8)] text-sm font-[590]">
              Baby Blue
            </div>
            <div className="text-[rgba(255,255,255,0.4)] text-sm">
              Luke Hemmings
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[11px] px-1 py-0">
          <div className="text-[rgba(255,255,255,0.4)] text-xs">
            {currentTime}
          </div>
          <div className="flex-1 h-[7px] bg-white rounded-[3px]" />
          <div className="text-[rgba(255,255,255,0.4)] text-xs">
            -{duration}
          </div>
        </div>
        <div className="flex justify-center items-center gap-[34px] pt-5">
          <button
            onClick={onPrevious}
            className="hover:opacity-80"
            aria-label="Previous track"
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_4_848)"> <path d="M17.1506 17.4428V2.05702C17.1506 0.505988 15.4616 -0.454747 14.1284 0.337948L1.47785 7.8599C0.188975 8.62626 0.170628 10.4859 1.44413 11.2775L14.0947 19.1414C15.427 19.9696 17.1506 19.0115 17.1506 17.4428Z" fill="white"></path> <path d="M33.3011 17.4428V2.05702C33.3011 0.505988 31.6121 -0.454747 30.2789 0.337948L17.6284 7.8599C16.3395 8.62626 16.3211 10.4859 17.5946 11.2775L30.2452 19.1414C31.5775 19.9696 33.3011 19.0115 33.3011 17.4428Z" fill="white"></path> </g> <defs> <clipPath id="clip0_4_848"> <rect width="32.8011" height="19.3921" fill="white" transform="translate(0.5 0.0539551)"></rect> </clipPath> </defs> </svg>',
            }}
          />
          <button
            onClick={onPlayPause}
            className="hover:opacity-80"
            aria-label={isPlaying ? "Pause" : "Play"}
            dangerouslySetInnerHTML={{
              __html: isPlaying
                ? '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.3011 10.25C12.3011 9.14543 13.1965 8.25 14.3011 8.25H19.3011C20.4057 8.25 21.3011 9.14543 21.3011 10.25V37.25C21.3011 38.3546 20.4057 39.25 19.3011 39.25H14.3011C13.1965 39.25 12.3011 38.3546 12.3011 37.25V10.25Z" fill="white"></path> <path d="M26.3011 10.25C26.3011 9.14543 27.1965 8.25 28.3011 8.25H33.3011C34.4057 8.25 35.3011 9.14543 35.3011 10.25V37.25C35.3011 38.3546 34.4057 39.25 33.3011 39.25H28.3011C27.1965 39.25 26.3011 38.3546 26.3011 37.25V10.25Z" fill="white"></path> </svg>'
                : '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3011 16.7563V31.7437C18.3011 32.8925 19.5448 33.6172 20.5538 33.0564L33.3713 25.9332C34.6019 25.2493 34.6133 23.4937 33.3915 22.7941L20.5707 15.4531C19.5615 14.8753 18.3011 15.599 18.3011 16.7563Z" fill="white"></path> </svg>',
            }}
          />
          <button
            onClick={onNext}
            className="hover:opacity-80"
            aria-label="Next track"
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_4_850)"> <path d="M16.4516 2.05717L16.4516 17.443C16.4516 18.994 18.1406 19.9547 19.4737 19.1621L32.1243 11.6401C33.4132 10.8737 33.4315 9.0141 32.158 8.22246L19.5075 0.358598C18.1752 -0.469566 16.4516 0.48848 16.4516 2.05717Z" fill="white"></path> <path d="M0.301075 2.05717L0.301073 17.443C0.301073 18.994 1.99005 19.9547 3.32322 19.1621L15.9738 11.6401C17.2627 10.8737 17.281 9.0141 16.0075 8.22246L3.35694 0.358598C2.02468 -0.469566 0.301075 0.48848 0.301075 2.05717Z" fill="white"></path> </g> <defs> <clipPath id="clip0_4_850"> <rect width="32.8011" height="19.3921" fill="white" transform="translate(33.1021 19.446) rotate(-180)"></rect> </clipPath> </defs> </svg>',
            }}
          />
        </div>
      </div>
    </div>
  );
};
