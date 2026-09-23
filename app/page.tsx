import Image from "next/image";
import Button from "./_components/Button";
import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Paragarph, { ParagarphFooter } from "./_components/Paragarph";
import bg from "@/public/bg-header-mobile.png";

export default function Page() {
  return (
    <>
      <div className="h-0 w-full overflow-hidden">
        <Image
          className="object-cover object-top"
          src={bg}
          alt="The Background Image"
          fill
          quality={80}
          placeholder="blur"
        />
      </div>
      <div className="mt-10 flex justify-self-center align-middle">
        <Logo />
      </div>
      <Header type="h1">A historty of everything you copy</Header>
      <Paragarph marginTop="p1">
        Clipboard allows you to track and organze everything you copy. Instantly
        access your clipboard on all your device.
      </Paragarph>

      {/*The first two buttons */}
      <div className="mb-32">
        <div className="mt-5 justify-self-center">
          <Button shadowColor="var(--color-primary-shadow)" type="primary">
            Download for iOS
          </Button>
        </div>

        <div className="mt-7 justify-self-center">
          <Button shadowColor="var(--color-secondary-shadow)" type="secondary">
            Download for Mac
          </Button>
        </div>
      </div>

      {/*The Keep track header and paragraph before the Desktop Image */}
      <div>
        <div className="mb-5">
          <Header>Keep track of your snippets</Header>
        </div>
        <div className="mb-10">
          <Paragarph>
            Clipboard instanly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </Paragarph>
        </div>
      </div>

      {/*The Desktop Image and text section(text with header and paragraph)  */}
      <div className="mb-32">
        <div className="mb-10 flex justify-self-center">
          <Image
            className="object-cover"
            src="/computer.png"
            alt="A Mac Desktop Computer"
            width="230"
            height="200"
          />
        </div>
        <div>
          <div className="mb-10">
            <Header>Quick Search</Header>
            <Paragarph>
              Easily search your snippets by content, category, web address,
              application, and more
            </Paragarph>
          </div>

          <div className="mb-10">
            <Header>iCloud Sync</Header>
            <Paragarph>
              Instanly saves and syncs snippets across all your device
            </Paragarph>
          </div>
          <div className="mb-10">
            <Header>Complete History</Header>
            <Paragarph>
              Retrieve any snippets from the first moments you started using the
              app
            </Paragarph>
          </div>
        </div>
      </div>

      {/*The Section with that text and Tablet & Phone pics */}
      <div className="mb-32">
        <div className="mb-12">
          <Header>Access Clipboard Anywhere</Header>
          <Paragarph>
            Whether you&apos;re on the go, or at your computer, you can access
            all your Clipoard snippets in a few simple clicks
          </Paragarph>
        </div>

        <div className="mb-10 flex justify-self-center">
          <Image
            className="object-cover"
            src="/devices.png"
            alt="Tablet and Mobile phone"
            width="230"
            height="200"
          />
        </div>
      </div>

      {/*The standalone text before the blacklist section */}
      <div>
        <Header>Supercharge your workflow</Header>
        <Paragarph>
          We&apos;ve got the tools to boost your productivity.
        </Paragarph>
      </div>

      {/* This is the section with image, heading and text under them Create Blacklist */}
      <div className="mb-28">
        <div className="mt-20">
          <div className="mb-5 flex justify-self-center">
            <Image
              className="object-cover"
              src="/blacklist.svg"
              alt="A List Icon"
              width="50"
              height="50"
            />
          </div>

          <Header>Create blacklist</Header>
          <Paragarph>
            Ensure sensitive informative never makes its way to your clipboard
            by excluding certain sources.
          </Paragarph>
        </div>

        <div className="mt-20">
          <div className="mb-3 flex justify-self-center">
            <Image
              className="object-cover"
              src="/text.svg"
              alt="A Text Icon"
              width="50"
              height="50"
            />
          </div>

          <Header>Plain text snippets</Header>
          <Paragarph>
            Remove unwanted formatting from copied text for a consistent look.
          </Paragarph>
        </div>

        <div className="mt-20">
          <div className="mb-3 flex justify-self-center">
            <Image
              className="object-cover"
              src="/preview.svg"
              alt="An Eye Icon"
              width="50"
              height="50"
            />
          </div>

          <Header>Sneak preview</Header>
          <Paragarph>
            Quick preview of all snippets on your Clipboard for easy access.
          </Paragarph>
        </div>
      </div>

      {/*The partners Logo (Google, IBM etc..)*/}
      <div className="mb-32">
        <div className="mb-15 flex justify-self-center">
          <Image
            className="object-cover"
            src="/google.png"
            alt="Google Logo"
            width="150"
            height="150"
          />
        </div>

        <div className="mb-15 flex justify-self-center">
          <Image
            className="object-cover"
            src="/ibm.png"
            alt="IBM Logo"
            width="150"
            height="150"
          />
        </div>

        <div className="mb-15 flex justify-self-center">
          <Image
            className="object-cover"
            src="/microsoft.png"
            alt="Microsoft Logo"
            width="150"
            height="150"
          />
        </div>

        <div className="mb-15 flex justify-self-center">
          <Image
            className="object-cover"
            src="/hp.png"
            alt="HP Logo"
            width="150"
            height="150"
          />
        </div>

        <div className="mb-15 flex justify-self-center">
          <Image
            className="object-cover"
            src="/vector-graphics.png"
            alt="Vector Graphic Logo"
            width="150"
            height="150"
          />
        </div>
      </div>

      {/*The Last Text with Button before the footer*/}

      <Header>Clipboard for iOS and Mac OS</Header>
      <div className="mt-5 mb-10">
        <Paragarph>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you&apos;re ready to start adding to your clipboard.
        </Paragarph>
      </div>

      <div className="mb-32">
        <div className="mt-5 justify-self-center">
          <Button shadowColor="var(--color-primary-shadow)" type="primary">
            Download for iOS
          </Button>
        </div>

        <div className="mt-5 justify-self-center">
          <Button shadowColor="var(--color-secondary-shadow)" type="secondary">
            Download for Mac
          </Button>
        </div>
      </div>

      {/*Footer */}

      <div className="bg-footer">
        <footer>
          <div className="mb-10 flex justify-self-center pt-10">
            <Image
              className="object-cover"
              src="/logo.svg"
              alt="Clipboard Logo"
              width="50"
              height="50"
            />
          </div>

          <div>
            <ParagarphFooter>FAQs</ParagarphFooter>
            <ParagarphFooter>Contact Us</ParagarphFooter>
          </div>

          <div>
            <ParagarphFooter>Privacy Policy</ParagarphFooter>
            <ParagarphFooter>Press Kit</ParagarphFooter>
          </div>

          <ParagarphFooter>Install Guide</ParagarphFooter>

          <div className="mt-10 flex justify-between gap-10 justify-self-center pb-10">
            <div>
              <Image
                className="object-cover"
                src="/facebook.svg"
                alt="Facebook Logo"
                width="20"
                height="20"
              />
            </div>

            <div>
              <Image
                className="object-cover"
                src="/twitter.svg"
                alt="Twitter Logo"
                width="20"
                height="20"
              />
            </div>
            <div>
              <Image
                className="object-cover"
                src="/instagram.svg"
                alt="Instagram Logo"
                width="20"
                height="20"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
